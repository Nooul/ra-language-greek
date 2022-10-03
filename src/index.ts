import { TranslationMessages } from 'ra-core';

const elMessages: TranslationMessages = {
    ra: {
        action: {
            add_filter: 'Προσθήκη φίλτρου',
            add: 'Προσθήκη',
            back: 'Πίσω',
            bulk_actions: '1 επιλεγμένο |||| %{smart_count} επιλεγμένα',
            cancel: 'Ακύρωση',
            clear_input_value: 'Καθαρισμός',
            clone: 'Δημιουργία αντιγράφου',
            confirm: 'Επιβεβαίωση',
            create: 'Δημιουργία',
            create_item: 'Δημιουργία αντικειμένου',
            delete: 'Διαγραφή',
            edit: 'Επεξεργασία',
            export: 'Εξαγωγή',
            list: 'Λίστα',
            refresh: 'Ανανέωση',
            remove_filter: 'Διαγραφή φίλτρου',
            remove_all_filters: 'Διαγραφή όλων των φίλτρων',
            remove: 'Διαγραφή',
            save: 'Αποθήκευση',
            search: 'Αναζήτηση',
            select_all: 'Επιλογή όλων',
            select_row: 'Επιλογή σειράς',
            show: 'Εμφάνιση',
            sort: 'Ταξινόμηση',
            undo: 'Αναίρεση',
            unselect: 'Απεπιλογή',
            expand: 'Επέκταση',
            close: 'Κλείσιμο',
            open_menu: 'Άνοιγμα μενού',
            close_menu: 'Κλείσιμο μενού',
            update: 'Ενημέρωση',
            move_up: 'Μετακίνηση πάνω',
            move_down: 'Μετακίνηση κάτω',
            open: 'Άνοιγμα',
            toggle_theme: 'Αλλαγή θέματος',
        },
        boolean: {
            true: 'Ναι',
            false: 'Όχι',
            null: ' ',
        },
        page: {
            create: 'Δημιουργία %{name}',
            dashboard: 'Αρχική',
            edit: '%{name} #%{id}',
            error: 'Κάτι πήγε λάθος',
            list: 'Λίστα των %{name}',
            loading: 'Φόρτωση',
            not_found: "'Η σελίδα δεν υπάρχει",
            show: '%{name} #%{id}',
            empty: 'Δεν υπάρχει %{name} ακόμα',
            invite: 'Θέλετε να προσθέτε ένα;',
        },
        input: {
            file: {
                upload_several:
                    'Τοποθετήστε μερικά αρχεία για μεταφόρτωση ή κάντε κλικ για να επιλέξετε ένα.',
                upload_single:
                    'Τοποθετήστε ένα αρχείο για μεταφόρτωση ή κάντε κλικ για να το επιλέξετε.',
            },
            image: {
                upload_several:
                    'Τοποθετήστε μερικές εικόνες για μεταφόρτωση ή κάντε κλικ για να επιλέξετε μία.',
                upload_single:
                    'Τοποθετήστε μια εικόνα για μεταφόρτωση ή κάντε κλικ για να την επιλέξετε.',
            },
            references: {
                all_missing: 'Δεν βρέθηκαν αποτελέσματα',
                many_missing:
                    'Τουλάχιστον μία από τις σχετικές αναφορές δεν φαίνεται πλέον να είναι διαθέσιμη.',
                single_missing:
                    'Η συσχετιζόμενη αναφορά δεν φαίνεται πλέον να είναι διαθέσιμη.',
            },
            password: {
                toggle_visible: 'Εμφάνιση κωδικού',
                toggle_hidden: 'Απόκρυψη κωδικού',
            },
        },
        message: {
            about: 'Σχετικά',
            are_you_sure: 'Είστε σίγουρος;',
            bulk_delete_content:
                'Είστε σίγουρος ότι θέλετε να διαγράψετε το %{name}? |||| Είστε σίγουρος ότι θέλετε να διαγράψετε αυτές τις %{smart_count} εγγραφές?',
            bulk_delete_title:
                'Διαγραφή %{name} |||| Διαγραφή %{smart_count} %{name} εγγραφών',
            bulk_update_content:
                'Είστε σίγουρος ότι θέλετε να ενημερώσετε το %{name}? |||| Είστε σιγουρος ότι θέλετε να ενημερώσετε αυτά τα %{smart_count} αντικείμενα?',
            bulk_update_title:
                'Ενημέρωση %{name} |||| Ενημέρωση %{smart_count} %{name}',
            delete_content: 'Σίγουρα θέλετε να το διαγράψετε;',
            delete_title: 'Διαγραφή %{name} #%{id}',
            details: 'Λεπτομέρειες',
            error:
                'Ένα λάθος πραγματοποιήθηκε και η ενέργειά σας δεν ολοκληρώθηκε.',
            invalid_form:
                'Η φόρμα δεν είναι έγκυρη. Παρακαλώ ελέγξτε για λάθη.',
            loading: 'Η σελίδα φορτώνει, παρακαλώ περιμένετε.',
            no: 'Όχι',
            not_found: 'Δεν βρέθηκαν αποτελέσματα',
            yes: 'Ναι',
            unsaved_changes:
                'Μερικές από τις αλλαγές σας δεν σώθηκαν. Θέλετε να τις αγνοήσετε;',
        },
        navigation: {
            no_results: 'Δεν βρέθηκαν αποτελέσματα',
            no_more_results:
                'Ο αριθμός σελίδας %{page} είναι εκτός ορίων. Δοκιμάστε την προηγούμενη σελίδα.',
            page_out_of_boundaries:
                'Η σελίδα με αριθμό %{page} είναι εκτός ορίων',
            page_out_from_end:
                'Δεν είναι δυνατή η περιήγηση μετά την τελευταία σελίδα',
            page_out_from_begin:
                'Δεν είναι δυνατή η περιήγηση πριν την 1η σελίδα',
            page_range_info: '%{offsetBegin}-%{offsetEnd} από %{total}',
            partial_page_range_info:
                '%{offsetBegin}-%{offsetEnd} άνω των %{offsetEnd}',
            current_page: 'Σελίδα %{page}',
            page: 'Πήγαινε στη σελίδα %{page}',
            first: 'Πήγαινε στην πρώτη σελίδα',
            last: 'Πήγαινε στην τελευταία σελίδα',
            next: 'Πήγαινε στην επόμενη σελίδα',
            previous: 'Πήγαινε στην προηγούμενη σελίδα',
            page_rows_per_page: 'Καταχωρήσεις ανά σελίδα:',
            skip_nav: 'Παράκαμψη',
        },
        sort: {
            sort_by: 'Ταξινόμηση κατά %{field} %{order}',
            ASC: 'Αύξουσα σειρά',
            DESC: 'Φθίνουσα σειρά',
        },
        auth: {
            auth_check_error: 'Παρακαλώ εισέλθετε για να συνεχίσετε',
            user_menu: 'Προφίλ',
            username: "'Ονομα χρήστη",
            password: 'Κωδικός',
            sign_in: 'Είσοδος',
            sign_in_error: 'Αποτυχημένη είσοδος, παρακαλώ προσπαθήστε πάλι',
            logout: 'Έξοδος',
        },
        notification: {
            updated:
                'Εγγραφή ανανεώθηκε |||| %{smart_count} εγγραφές ανανεώθηκαν',
            created: 'Η εγγραφή δημιουργήθηκε',
            deleted:
                'Η εγγραφή διαγράφηκε |||| %{smart_count} εγγραφές διαγράφηκαν',
            bad_item: 'Εσφαλμένη εγγραφή',
            item_doesnt_exist: 'Η εγγραφή δεν υπάρχει',
            http_error: 'Σφάλμα επικοινωνίας με τον διακομιστή',
            data_provider_error:
                'dataProvider λάθος. Ελέγξτε την κονσόλα για λεπτομέρειες.',
            i18n_error:
                'Δεν βρέθηκαν οι μεταφράσεις για την συγκεκριμένη γλώσσα',
            canceled: 'Η ενέργεια ακυρώθηκε',
            logged_out: 'Αποσυνδεθήκατε',
            not_authorized:
                "Δεν έχετε εξουσιοδότηση πρόσβασης σ' αυτή τη σελίδα.",
        },
        validation: {
            required: 'Υποχρεωτικό',
            minLength: 'Χρειάζονται το λιγότερο %{max} χαρακτήρες',
            maxLength: 'Χρειάζονται το πολύ %{max} χαρακτήρες',
            minValue: 'Χρειάζονται τουλάχιστον %{min}',
            maxValue: 'Χρειάζεται το πολύ %{max}',
            number: 'Πρέπει να είναι αριθμός',
            email: 'Πρέπει να είναι έγκυρο email',
            oneOf: 'Πρέπει να είναι ένα από: %{options}',
            regex:
                'Πρέπει να ακολουθεί συγκεκριμένο φορμάτ (regexp): %{pattern}',
        },
        saved_queries: {
            label: 'Αποθηκευμένες επερωτήσεις',
            query_name: 'Όνομα επερώτησης',
            new_label: 'Αποθήκευση επερώτησης...',
            new_dialog_title: 'Αποθήκευση επερώτησης ως',
            remove_label: 'Διαγραφή αποθηκευμένης επερώτησης',
            remove_label_with_name: 'Διαγραφή επερώτησης "%{name}"',
            remove_dialog_title: 'Διαγραφή αποθηκευμένης επερώτησης;',
            remove_message:
                'Είστε σίγουρος ότι θέλετε να διαγράψετε αυτή την επερώτηση από τις αποθηκευμένες;',
            help:
                'Φίλτραρε τη λίστα και αποθήκευσε αυτή την επερώτηση για αργότερα',
        },
        configurable: {
            customize: 'Προσαρμόστε',
            templateError: '## Σφάλμα Προτύπου',
            configureMode: 'Διαμορφώστε αυτή τη σελίδα',
            inspector: {
                title: 'Επιθεωρητής',
                content:
                    'Τοποθετήστε το δείκτη του ποντικιού στα στοιχεία διεπαφής χρήστη της εφαρμογής για να τα διαμορφώσετε',
                reset: 'Επαναφορά ρυθμίσεων',
            },
            SimpleList: {
                primaryText: 'Πρωτεύον κείμενο',
                secondaryText: 'Δευτερεύον κείμενο',
                tertiaryText: 'Τριτογενές κείμενο',
            },
        },
    },
};

export default elMessages;
