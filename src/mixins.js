import moment from 'moment'

export default {
    methods: {
        dateFormatter(date, format='MMM D, YYYY - HH:mm') {
            return moment(date).format(format)
        }
    }
};  