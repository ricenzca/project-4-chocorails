class CreateOrders < ActiveRecord::Migration[5.2]
  def change
    create_table :orders do |t|
    	t.references :tranxaction
    	t.references :product
    	t.integer :product_quantity
    	t.string :order_number
    	t.timestamps
    end
  end
end
