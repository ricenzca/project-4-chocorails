require 'csv'

class Product < ApplicationRecord

  def self.all_with_product_details
    Product.select("products.*")
  end

    def self.as_csv
      CSV.generate do |csv|
        columns = %w(id brand  name img_url origin ingredients desc price weight )
        csv << columns.map(&:humanize)
        all_with_product_details.each do |product|
          csv << product.attributes.values_at(*columns)
        end
      end
    end

end