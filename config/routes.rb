Rails.application.routes.draw do
  resources :promos
  resources :reviews

  get '/orders/:order_number' => 'orders#show'
  resources :orders
  resources :customers
  resources :transactions

  get '/admin' => 'admin#index', :as => 'admin'
  post '/customers/subscribe' => 'customers#subscribe'

  post '/products/create' => 'products#admincreate'
  post '/promos/create' => 'promos#admincreate'
  post '/customers/create' => 'customers#admincreate'
  post '/orders/create' => 'orders#admincreate'

  get '/products/getall' => 'products#get_all_products', defaults: { format: 'json'}
  get '/orders/getall' => 'orders#get_all_orders', :as => :orders_csv, defaults: { format: 'json'}

  get '/promo/:promo' => 'promos#validate'

  post '/charge' => 'promos#charge'

  post '/submit' => 'promos#submit'

  resources :products
  root 'products#main'

  match '*path', to: 'products#main', via: :all
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end