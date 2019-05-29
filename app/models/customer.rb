require 'csv'

class Customer < ApplicationRecord

  #has_many :transaction
  has_many :tranxaction, foreign_key: "tranxaction_id", class_name: "Transaction"

    def self.all_with_customer_details
    customer.select("customers.*")
    end

    def self.as_csv
      CSV.generate do |csv|
        columns = %w(id email address postal_code country city contact )
        csv << columns.map(&:humanize)
        all_with_customer_details.each do |customer|
          csv << customer.attributes.values_at(*columns)
        end
      end
    end

end