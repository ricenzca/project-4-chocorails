class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :brand
      t.string :name
      t.string :img_url
      t.string :origin
      t.string :ingredients
      t.text :desc
      t.float :price
      t.integer :weight
      t.timestamps
    end
  end
end