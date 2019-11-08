Rails.application.routes.draw do
  devise_for :users
  root to: 'groups#index'
  resources :users, only: [:edit, :update]
  resources :groups, only: [:inex, :new, :create, :edit, :update]
    resources :messages, only:[:index, :create]
end
