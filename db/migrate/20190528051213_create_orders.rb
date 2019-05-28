class CreateOrders < ActiveRecord::Migration[5.2]
  def change
    create_table :orders do |t|
    	t.references :transaction
    	t.references :product
    	t.integer :product_quantity
    	t.timestamps
    end
  end
end
