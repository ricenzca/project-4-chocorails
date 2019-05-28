class PromosController < ApplicationController
  before_action :set_promo, only: [:show, :edit, :update, :destroy]

  # GET /promos
  # GET /promos.json
  def index
    @promos = Promo.all.order("created_at ASC")

  end

  # GET /promos/1
  # GET /promos/1.json
  def show
  end

  # GET /promos/new
  def new
    @promo = Promo.new
  end

  # GET /promos/1/edit
  def edit
  end

  # POST /promos
  # POST /promos.json
  def create
    @promo = Promo.new(promo_params)

    respond_to do |format|
      if @promo.save
        format.html { redirect_to @promo, notice: 'Promo was successfully created.' }
        format.json { render :show, status: :created, location: @promo }
      else
        format.html { render :new }
        format.json { render json: @promo.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /promos/1
  # PATCH/PUT /promos/1.json
  def update
    respond_to do |format|
      if @promo.update(promo_params)
        format.html { redirect_to @promo, notice: 'Promo was successfully updated.' }
        format.json { render :show, status: :ok, location: @promo }
      else
        format.html { render :edit }
        format.json { render json: @promo.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /promos/1
  # DELETE /promos/1.json
  def destroy
    @promo.destroy
    respond_to do |format|
      format.html { redirect_to promos_url, notice: 'Promo was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  #validates promo code
  def validate
    puts "validate params"
    p params[:promo]
    @promo = Promo.find_by(code: params[:promo])
    if @promo.present?
      puts "promo code present"
      response = { valid: @promo.is_valid?,
                   discount: @promo.discount
                 }
    else
      puts "promo code not present"
      response = { valid: false,
      }
    end
    respond_to do |format|
      format.json { render json: response }
    end
  end

  def charge
    puts "charge params"
    p params
    puts "request body"
    p request.body.read
    puts "parsed"
    body = JSON.parse(request.body.read)
    p body[1]["name"]
    response = "charged!"
    render json: response
  end

  def submit
    puts "submit params"
    p params
    puts "submit req body"
    p request.body.read
    puts "submit parsed"
    body = JSON.parse(request.body.read)
    p body
    puts "body.customer"
    p body['customer']
    @customer = Customer.new(body['customer'])
    puts "@customer"
    p @customer

    puts "@customer.save"
    if @customer.save
      response = "submitted successful"
      render json: response
    else
      response = "submission faild"
      render json: response
    end
  end

  def admincreate
    render plain: params.inspect

    @amount = params[:amount]
    @limit = params[:limit]
    @expiration = params[:expiration]
    @code = params[:code]
    @percentage = params[:percentage]
    @used = params[:used]

    @promo = Promo.new(amount:@amount, limit:@limit, expiration:@expiration, code:@code, percentage:@percentage, used:@used)
    @promo.save

    # redirect_to '/admin'
    # @brand = params[:brand]
    # @name = params[:name]
    # @ime_url = params[:img_url]
    # @origin = params[:origin]
    # @ingredients = params[:ingredients]
    # @price = params[:price]
    # @weight = params[:weight]

    # @product = Product.new(brand:@brand, name:@name, img_url:@img_url, origin:@origin, ingredients:@ingredients, price:@price, weight:@weight)
    # @product.save
  end



  private
    # Use callbacks to share common setup or constraints between actions.
    def set_promo
      @promo = Promo.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def promo_params
      params.require(:promo).permit(:unique_id, :discount)
    end

end