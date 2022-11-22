import Vuex from 'vuex'
import axios from 'axios'

export default new Vuex.Store({
    state: {
        errors: {},
        statuses: {
            0: 'New',
            1: 'Processing',
            2: 'Delivered',
            3: 'Closed',
        },
        pagination: {
            previous: null,
            next: null,
        },
        shipment: {
            status: 0
        },
        shipments: [],
    },

    getters: {
        getErrors: state => state.errors,
        getStatuses: state => state.statuses,
        getPagination: state => state.pagination,
        getShipment: state => state.shipment,
        getShipments: state => state.shipments,
    },

    mutations: {
        setErrors(state, errors) {
            state.errors = errors;
        },
        setPagination(state, data) {
            state.pagination = (({previous, next}) => ({previous, next}))(data);
        },
        setShipment(state, shipment) {
            state.shipment = shipment;
        },
        setShipments(state, shipments) {
            state.shipments = shipments;
        },
    },

    actions: {
        async getShipments({commit}, url=null) {
            try {
                const response = await axios.get(url ? url : axios.defaults.baseURL)
                commit('setShipments', response?.data?.results)
                commit('setPagination', response?.data)
            } catch (error) {
                console.log(error)
            }
        },
        async getShipment({commit}, shipmentId) {
            try {
                const response = await axios.get(`${axios.defaults.baseURL}${shipmentId}/`);
                commit('setShipment', response?.data)
            } catch (error) {
                console.log(error);
            }
        },
        addShipment({state}, shipment) {
            state.shipments.push(shipment);
        },
        updateShipment({state}, shipment) {
            state.shipments = [
                ...state.shipments.filter(element => element.id !== shipment.id),
                shipment
            ]
        },
        deleteShipment({state}, shipmentId) {
            state.shipments.splice(state.shipments.findIndex(i => i.id === shipmentId), 1);
        },
        setShipmentStatus({state}) {
            if (typeof state.shipment.status === 'string') {
                state.shipment.status = Object.keys(state.statuses).find(key => state.statuses[key] === state.shipment.status)
            }
        },
        clearErrors({commit}) {
            commit('setErrors', {});
        },
    }
});