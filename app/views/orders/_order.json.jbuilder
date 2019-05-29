json.extract! order, :id, :tranxaction_id, :product_id, :product_quantity, :created_at, :updated_at
json.url order_url(order, format: :json)