class Tranxaction < ApplicationRecord
	has_many :order
	belongs_to :customer
	has_many :product, through: :order
	belongs_to :promo, optional: true
end
