json.extract! promo, :id, :amount, :limit, :expiration, :code, :percentage, :used, :created_at, :updated_at
json.url promo_url(promo, format: :json)