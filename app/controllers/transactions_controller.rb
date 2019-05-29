class TransactionsController < ApplicationController

  def index
    @transactions = Transaction.all
    # respond_to do |format|

    #     @transactions = Transaction.all

    #     format.json {
    #       render json: @transactions
    #     }
    # end
 end

 def show
  @transaction = Transaction.find(params[:id])
 end

  def new
    @transaction = Transaction.new
  end

  # GET /products/1/edit
  def edit

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



end