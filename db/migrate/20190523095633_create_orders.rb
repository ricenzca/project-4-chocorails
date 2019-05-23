class CreateOrders < ActiveRecord::Migration[5.2]
  def change
    create_table :orders do |t|
      t.integer :quantity
      t.string :delivery_address
      t.float :total_amount
      t.string :stripe_id
      t.string :order_number
      t.references :promo

      t.timestamps
    end
  end
end
