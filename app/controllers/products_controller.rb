class ProductsController < ApplicationController
  before_action :set_product, only: [:show, :edit, :update, :destroy]

  # GET /products
  # GET /products.json
  def index
    @products = Product.all

    @products_csv = Product.all_with_product_details

    respond_to do |format|
      format.html
      format.csv { send_data @products_csv.as_csv }
    end

  end

  # GET /products/1
  # GET /products/1.json
  def show
  end

  # GET /products/new
  def new
    @product = Product.new
  end

  # GET /products/1/edit
  def edit
  end

  # POST /products
  # POST /products.json
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

  def admincreate
    redirect_to '/admin'
    @brand = params[:brand]
    @name = params[:name]
    @ime_url = params[:img_url]
    @origin = params[:origin]
    @ingredients = params[:ingredients]
    @price = params[:price]
    @weight = params[:weight]

    @product = Product.new(brand:@brand, name:@name, img_url:@img_url, origin:@origin, ingredients:@ingredients, price:@price, weight:@weight)
    @product.save

  end

  # PATCH/PUT /products/1
  # PATCH/PUT /products/1.json
  def update

    respond_to do |format|
      if @product.update(product_params)
        format.html { redirect_to '/admin', notice: 'Product was successfully updated.' }
        format.json { render :show, status: :ok, location: @product }
      else
        format.html { render :edit }
        format.json { render json: @product.errors, status: :unprocessable_entity }
      end
    end
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

  def main
  end

  def get_all_products

      respond_to do |format|

        @products = Product.all.order("created_at ASC")

        format.json {
          render json: @products
        }
      end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_product
      @product = Product.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def product_params
      params.require(:product).permit(:name, :price, :desc, :img_url, )
    end
end