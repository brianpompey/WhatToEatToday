Rails.application.routes.draw do
  resources :selections
  resources :users
  resources :restaurants
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
