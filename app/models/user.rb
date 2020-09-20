class User < ApplicationRecord
    has_many :selections
    has_many :restaurants, through: :selections
end
