Rails.application.routes.draw do
  resources :promos
  resources :reviews
  resources :orders
  resources :customers

  get '/products/getall' => 'products#get_all_products', defaults: { format: 'json'}
  resources :products
  root 'products#main'

  match '*path', to: 'products#main', via: :all
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end