class CreatePromos < ActiveRecord::Migration[5.2]
  def change
    create_table :promos do |t|
      t.string :unique_id
      t.integer :discount

      t.timestamps
    end
  end
end
