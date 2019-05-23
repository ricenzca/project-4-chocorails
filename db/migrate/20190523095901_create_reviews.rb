class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :rating
      t.text :review_text
      t.string :nickname

      t.timestamps
    end
  end
end
