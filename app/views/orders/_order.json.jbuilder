json.extract! order, :id, :quantity, :delivery_address, :total_amount, :stripe_id, :created_at, :updated_at
json.url order_url(order, format: :json)
