class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :name
      t.float :price
      t.text :description
      t.string :image_url
      t.string :string

      t.timestamps
    end
  end
end
