class CreateTransactions < ActiveRecord::Migration[5.2]
  def change
    create_table :transactions do |t|
    	t.integer :quantity
    	t.string :delivery_address
    	t.float :total_amount
    	t.string :order_number
    	t.references :promo
    	t.string :products_purchased
    	t.string :firstname
    	t.string :lastname
    	t.string :email
    	t.string :address1
    	t.string :address2
    	t.string :state
    	t.integer :postal_code
    	t.string :country
    	t.string :city
    	t.string :contact
    	t.timestamps
    end
  end
end
