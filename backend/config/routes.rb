Rails.application.routes.draw do
  resources :flow_categories
  namespace :api do
    namespace :v1 do

      resources :cashes
    
    end
  end
end
