class Transaction < ApplicationRecord
	has_many :order
	belongs_to :customer
end
