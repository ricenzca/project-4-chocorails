require 'csv'

class Order < ApplicationRecord

    def self.all_with_order_details
    Order.select("orders.*")
    end

    def self.as_csv
      CSV.generate do |csv|
        columns = %w(id qty delivery_address total_amount stripe_id order_number promo_id )
        csv << columns.map(&:humanize)
        all_with_order_details.each do |order|
          csv << order.attributes.values_at(*columns)
        end
      end
    end

end