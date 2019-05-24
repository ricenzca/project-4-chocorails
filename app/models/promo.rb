class Promo < ApplicationRecord
	validates_numericality_of :amount, on: :create, message: "is not a number"

	validates_uniqueness_of :code, on: :create, message: "must be unique", case_sensitive: false

	has_many :orders

	# returns true if the code is valid
	# false otherwise
	def is_valid?
	    # Expiration date is nil, or equal to or greater than today?
	    (self.expiration.nil? || self.expiration >= Date.current) &&
	    # Limit is set to 0 (for unlimited) or limit is greater than the current used count.
	    (self.limit == 0 || self.limit > self.used)
	end

	# Calculates the discounted price
	# Returns full price if the code is not valid
	# PRICE is set in an initializer, 
	# based on a environment variable.
	def discounted_price
    price = if is_valid?
              if percentage
                PRICE - (PRICE * (amount/100))
              else
                (PRICE - amount)
              end
            else
              PRICE
            end
    return price.floor
	end

end
