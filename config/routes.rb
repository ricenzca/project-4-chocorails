Rails.application.routes.draw do
  root 'products#index'
  resources :promos
  resources :reviews
  resources :orders
  resources :customers
  get '/products/getall' => 'products#get_all_products', defaults: { format: 'json'}
  resources :products
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end