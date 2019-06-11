class CreateTranxactions < ActiveRecord::Migration[5.2]
  def change
    create_table :tranxactions do |t|
    	t.references :customer
        t.float :total_amount
    	t.references :promo
    	t.string :firstname
    	t.string :lastname
    	t.string :email
    	t.string :address1
    	t.string :address2
    	t.string :state
    	t.string :postal_code
    	t.string :country
    	t.string :city
    	t.string :contact
        t.string :status, default: "pending"
    	t.timestamps
    end
  end
end
