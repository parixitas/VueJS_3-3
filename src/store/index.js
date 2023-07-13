import { createStore } from 'vuex'

const getInitialState = () => {
    try {
        return JSON.parse(localStorage.getItem("cards")) || []
    } catch {
        return []
    }
}

export default createStore({
    state: {
        cards: getInitialState()
    },
    mutations: {
        UPDATE_CARD(state, payload) {
            state.cards = payload
        }
    },
    actions: {
        addToCards(context, payload) {
            const cards = context.state.cards
            cards.push(payload)
            context.commit('UPDATE_CARD', cards)
            localStorage.setItem("cards", JSON.stringify(cards))
        },
        deleteCard(context, payload) {
            const cards = context.state.cards
            cards.splice(payload, 1)
            context.commit('UPDATE_CARD', cards)
            localStorage.setItem("cards", JSON.stringify(cards))
        }
    },
    getters: {
        // all getters
    }
})