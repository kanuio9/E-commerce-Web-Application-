const CartItem = require("../models/cartItem.model");
const userService = require("../services/user.service");

async function updateCartItem(userId, cartItemId, cartItemData) {
    try {
        const item = await findCartItemById(cartItemId);
        if (!item) {
            throw new Error("cart item not found: " + cartItemId);
        }
        const user = await userService.findUserById(userId);
        if (!user) {
            throw new Error("user not found", userId)
        }
        if (user._id.toString() === userId.toString()) {
            item.quantity = cartItemData.quantity;
            item.price = item.quantity * item.product.price;
            item.discountedPrice = item.quantity * item.product.discountedPrice;

            const updatedCartItem = await item.save();
            return updatedCartItem;
        }
        else {
            throw new Error("You Can't Update this Item");
        }
    } catch (error) {
        throw new Error(error.message);
    }
}

async function removeCartItem(userId, cartItemId) {
    const cartItem = await findCartItemById(cartItemId);
    const user = await userService.findUserById(userId);

    if (userId._id.toString() === cartItem.userId.toString()) {
        return await CartItem.findByIdAndDelete(cartItemId);
    }

    throw new Error("You can't remove another user's item");
}

async function findCartItemById(cartItemId) {
    const cartItem = await CartItem.findById(cartItemId).populate("product");
    if (cartItem) {
        return cartItem;
    }
    else {
        throw new Error("cart item not found with id: ", cartItemId);
    }
}

module.exports = {
    updateCartItem,
    removeCartItem,
    findCartItemById
}