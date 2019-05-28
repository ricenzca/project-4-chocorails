require 'csv'

class Product < ApplicationRecord

  def self.all_with_product_details
    Product.select("products.*, products.id as products_sdfsdfsd, products.brand as products_brand")
  end
end