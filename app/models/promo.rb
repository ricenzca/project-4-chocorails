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

	def discount
		if is_valid?
			puts "promo code valid"
	    if percentage
	      percent = true
	    else
	      percent = false
	    end
	    return {
	    	percent: percent, amount: amount
	    }
	  else
	  	puts "promo code invalid/expired/past limit"
	  	amount = 0
	    return amount
	  end
	end

end
