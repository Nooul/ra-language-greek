module.exports = {
     aor: {
        action: {
            delete: 'Διαγραφη',
            show: 'Εμφανιση',
            list: 'Λιστα',
            save: 'Αποθηκευση',
            create: 'Δημιουργια',
            edit: 'Επεξεργασια',
            cancel: 'Ακυρωση',
            refresh: 'Ανανεωση',
            add_filter: 'Προσθηκη φιλτρου',
            remove_filter: 'Διαγραφη φιλτρου',
            back: 'Επιστροφη'
        },
        boolean: {
            true: 'Ναι',
            false: 'Όχι',
        },
        page: {
            list: 'Λίστα των %{name}',
            edit: '%{name} #%{id}',
            show: '%{name} #%{id}',
            create: 'Δημιουργία %{name}',
            delete: 'Διαγραφή %{name} #%{id}',
            dashboard: 'Αρχική',
            not_found: 'Η σελίδα δεν υπάρχει'
        },
        input: {
            file: {
                upload_several: 'Εναποθέστε μερικά αρχεία για ανέβασμα, ή κάντε κλίκ για να επιλέξετε ένα.',
                upload_single: 'Εναποθέστε ένα αρχείο για ανέβασμα, ή κάντε κλίκ για να το επιλέξετε.',
            },
            image: {
                upload_several: 'Εναποθέστε μερικές εικόνες για ανέβασμα, ή κάντε κλίκ για να επιλέξετε μία.',
                upload_single: 'Εναποθέστε μία εικόνα για ανέβασμα, ή κάντε κλίκ για να το επιλέξετε.',
            },
        },
        message: {
            yes: 'Ναι',
            no: 'Όχι',
            are_you_sure: 'Είστε σίγουρος;',
            about: 'Σχετικά',
            not_found: 'Είτε πληκτρολογήσατε λάθος URL, είτε ακολουθήσατε λάθος σύνδεσμο',
        },
        navigation: {
            no_results: 'Δεν βρέθηκαν αποτελέσματα',
            page_out_of_boundaries: 'Η σελίδα με αριθμό %{page} είναι εκτός ορίων',
            page_out_from_end: 'Δεν είναι δυνατή η περιήγηση μετά την τελευταία σελίδα',
            page_out_from_begin: 'Δεν είναι δυνατή η περιήγηση πριν την 1η σελίδα',
            page_range_info: '%{offsetBegin}-%{offsetEnd} από %{total}',
            next: 'Επόμενη',
            prev: 'Προηγούμενη',
        },
        auth: {
            username: 'Όνομα χρήστη',
            password: 'Κωδικός χρήστη',
            sign_in: 'Είσοδος',
            sign_in_error: 'Η ταυτοποίηση απέτυχε, προσπαθήστε ξανά',
            logout: 'Αποσύνδεση',
        },
        notification: {
            updated: 'Η εγγραφή ανανεώθηκε',
            created: 'Η εγγραφή δημιουργήθηκε',
            deleted: 'Η εγγραφή διαγράφηκε',
            item_doesnt_exist: 'Η εγγραφή δεν υπάρχει',
            http_error: 'Σφάλμα επικοινωνίας με τον διακομιστή',
        },
        validation: {
            required: 'Υποχρεωτικό',
            minLength: 'Χρειάζονται τουλάχιστον %{min} χαρακτήρες',
            maxLength: 'Χρειάζονται το πολύ %{max} χαρακτήρες',
            minValue: 'Χρειάζονται τουλάχιστον %{min}',
            maxValue: 'Χρειάζονται το πολύ %{max} ή λιγότερο',
            number: 'Πρέπει να είναι αριθμός',
            email: 'Πρέπει να είναι έγκυρο email',
        },
    }
};
