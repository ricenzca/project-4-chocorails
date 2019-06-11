class TransactionsController < ApplicationController

  def index
    @tranxactions = Tranxaction.all
    # respond_to do |format|

    #     @tranxactions = Tranxaction.all

    #     format.json {
    #       render json: @tranxactions
    #     }
    # end
 end

 def show
  puts "show"
  p params
  @tranxaction = Tranxaction.select("tranxactions.*,promos.*").joins(:promo).where("tranxactions.id=?",params[:id])
  puts "@tranxaction"
  p @tranxaction[0]
  unless @tranxaction[0]
    @tranxaction = []
    @tranxaction[0] = Tranxaction.find(params[:id])
    puts "@tranxaction2"
    p @tranxaction
  end
  @order = Order.select("orders.*,products.*").joins(:product).where("tranxaction_id=?", params[:id]);
  puts "@order"
  p @order[0]
 end

  def new
    @tranxaction = Tranxaction.new
  end

  # GET /products/1/edit
  def edit
    puts "edit"
    @tranxaction = Tranxaction.find(params[:id])
  end

  def create
    @product = Product.new(product_params)

    respond_to do |format|
      if @product.save
        format.html { redirect_to @product, notice: 'Product was successfully created.' }
        format.json { render :show, status: :created, location: @product }
      else
        format.html { render :new }
        format.json { render json: @product.errors, status: :unprocessable_entity }
      end
    end
  end

  def status
    @product.update(product_params)
  end

  def update

    puts "tranxanction_params"
    p tranxanction_params
    @tranxaction = Tranxaction.find(params[:id])
    
    if @tranxaction.update(tranxanction_params)
      response = {response: "success"}
    else
      response = {response: @tranxaction.error}
    end
    render json: response
  end

  # DELETE /products/1
  # DELETE /products/1.json
  def destroy
    @product.destroy
    respond_to do |format|
      format.html { redirect_to products_url, notice: 'Product was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

  def tranxanction_params
    params.require(:transaction).permit(:id, :status)
  end


end