class CreateTransactions < ActiveRecord::Migration[5.2]
  def change
    create_table :transactions do |t|
    	t.references :customer
        t.float :total_amount
    	t.references :promo
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
