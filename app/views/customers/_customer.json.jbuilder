json.extract! customer, :id, :email, :address, :postal_code, :country, :city, :contact, :created_at, :updated_at
json.url customer_url(customer, format: :json)
