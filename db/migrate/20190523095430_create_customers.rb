class CreateCustomers < ActiveRecord::Migration[5.2]
  def change
    create_table :customers do |t|
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
      t.timestamps
    end
  end
end
