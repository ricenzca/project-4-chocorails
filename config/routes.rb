Rails.application.routes.draw do
  resources :promos
  resources :reviews
  resources :orders
  resources :customers
  resources :products
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
