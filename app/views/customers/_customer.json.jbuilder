json.extract! customer, :id, :firstname, :lastname, :email, :address1, :address2, :postal_code, :country, :city, :contact, :created_at, :updated_at
json.url customer_url(customer, format: :json)