json.extract! product, :id, :name, :price, :description, :image_url, :string, :created_at, :updated_at
json.url product_url(product, format: :json)
