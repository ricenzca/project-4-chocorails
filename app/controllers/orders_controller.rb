class OrdersController < ApplicationController
  before_action :set_order, only: [:edit, :update, :destroy]

  # GET /orders
  # GET /orders.json
  def index
    @orders = Order.all.order("created_at ASC")

  end

  # GET /orders/1
  # GET /orders/1.json
  def show
    puts "show order params"
    p params[:order_number]
    # @order = Order.where(order_number: params[:order_number]).map {
    #   |item|
    #   {"product_id": item["product_id"]}
    # }
    @order = Order.where(order_number: params[:order_number]).map {
      |item|
      item["product_id"]
    }
    puts "@order"
    p @order
    @product = Product.joins(:order).select("products.*, orders.*").where(order_number: @order)
    puts "@product"
    p @product
    render json: @product
  end

  # GET /orders/new
  def new
    @order = Order.new
  end

  # GET /orders/1/edit
  def edit
  end

  # POST /orders
  # POST /orders.json
  def create
    @order = Order.new(order_params)

    respond_to do |format|
      if @order.save
        format.html { redirect_to @order, notice: 'Order was successfully created.' }
        format.json { render :show, status: :created, location: @order }
      else
        format.html { render :new }
        format.json { render json: @order.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /orders/1
  # PATCH/PUT /orders/1.json
  def update
    respond_to do |format|
      if @order.update(order_params)
        format.html { redirect_to @order, notice: 'Order was successfully updated.' }
        format.json { render :show, status: :ok, location: @order }
      else
        format.html { render :edit }
        format.json { render json: @order.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /orders/1
  # DELETE /orders/1.json
  def destroy
    @order.destroy
    respond_to do |format|
      format.html { redirect_to orders_url, notice: 'Order was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  def admincreate
    @tranxaction_id = params[:tranxaction_id]
    @product_id = params[:product_id]
    @product_quantity = params[:product_quantity]

    @order = Order.new(tranxaction_id:@tranxaction_id, product_id:@promo_id, product_quantity:@product_qty)
    @order.save
  end

  def get_all_orders
    @orders_csv = Order.all_with_order_details

    respond_to do |format|
      format.html
      format.csv { send_data @orders_csv.as_csv }
    end
  end

  def transactions
    @transactions = Transaction.all.order("created_at ASC")
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_order
      @order = Order.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def order_params
      params.require(:order).permit(:tranxaction_id, :product_id, :product_quantity, :order_number, :promo_id)
    end
end