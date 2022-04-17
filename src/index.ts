import { TranslationMessages } from "ra-core";

const elMessages: TranslationMessages = {
  ra: {
    action: {
      add_filter: "Προσθήκη φίλτρου",
      add: "Προσθήκη",
      back: "Πίσω",
      bulk_actions: "%{smart_count} επιλεγμένα",
      cancel: "Ακύρωση",
      clear_input_value: "Καθαρισμός",
      clone: "Δημιουργία αντιγράφου",
      close: "Κλείσιμο",
      close_menu: "Κλείσιμο μενού",
      confirm: "Επιβεβαίωση",
      create: "Δημιουργία",
      create_item: "Δημιοργία αντικειμένου",
      delete: "Διαγραφή",
      edit: "Επεξεργασία",
      expand: "Επέκταση",
      export: "Εξαγωγή",
      list: "Λίστα",
      move_down: "Μετακίνηση κάτω",
      move_up: "Μετακίνηση πάνω",
      open_menu: "Άνοιγμα μενού",
      refresh: "Ανανέωση",
      remove: "Διαγραφή",
      remove_filter: "Διαγραφή φίλτρου",
      save: "Αποθήκευση",
      search: "Αναζήτηση",
      select_all: "Επιλογή όλων",
      select_row: "Επιλογή σειράς",
      show: "Εμφάνιση",
      sort: "Ταξινόμηση",
      undo: "Αναίρεση",
      unselect: "Απεπιλογή",
      update: "Ενημέρωση",
    },
    auth: {
      auth_check_error: "Παρακαλώ εισέλθετε για να συνεχίσετε",
      logout: "Έξοδος",
      password: "Κωδικός",
      sign_in: "Είσοδος",
      sign_in_error: "Αποτυχημένη είσοδος, παρακαλώ προσπαθήστε πάλι",
      user_menu: "Προφίλ",
      username: "'Ονομα χρήστη",
    },
    boolean: {
      false: "Όχι",
      null: " ",
      true: "Ναι",
    },
    input: {
      file: {
        upload_several:
          "Τοποθετήστε μερικά αρχεία για μεταφόρτωση ή κάντε κλικ για να επιλέξετε ένα.",
        upload_single:
          "Τοποθετήστε ένα αρχείο για μεταφόρτωση ή κάντε κλικ για να το επιλέξετε.",
      },
      image: {
        upload_several:
          "Τοποθετήστε μερικές εικόνες για μεταφόρτωση ή κάντε κλικ για να επιλέξετε μία.",
        upload_single:
          "Τοποθετήστε μια εικόνα για μεταφόρτωση ή κάντε κλικ για να την επιλέξετε.",
      },
      password: {
        toggle_hidden: "Κρύψτε κωδικό",
        toggle_visible: "Δείξτε κωδικό",
      },
      references: {
        all_missing: "Δεν βρέθηκαν αποτελέσματα",
        many_missing:
          "Τουλάχιστον μία από τις σχετικές αναφορές δεν φαίνεται πλέον να είναι διαθέσιμη. ",
        single_missing:
          "Η συσχετισμένη αναφορά δεν φαίνεται πλέον να είναι διαθέσιμη.",
      },
    },
    message: {
      about: "Σχετικά",
      are_you_sure: "Είστε σίγουρος;",
      bulk_delete_content:
        "Είστε σίγουρος ότι θέλετε να διαγράψετε το %{name}? |||| Είστε σίγουρος ότι θέλετε να διαγράψετε αυτές τις %{smart_count} εγγραφές?'",
      bulk_delete_title:
        "Διαγραφή %{name} |||| Διαγραφή %{smart_count} %{name} εγγραφών",
      bulk_update_content:
        "Είστε σιγουρος ότι θέλετε να ενημερώσετε το %{name}? |||| Είστε σιγουρος ότι θέλετε να ενημερώσετε αυτά τα %{smart_count} αντικείμενα?",
      bulk_update_title:
        "Ενημέρωση %{name} |||| Ενημέρωση %{smart_count} %{name}",
      delete_content: "Σίγουρα θέλετε να το διαγράψετε;",
      delete_title: "Διαγραφή %{name} #%{id}",
      details: "Λεπτομέρειες",
      error: "Ένα λάθος πραγματοποιήθηκε και η ενέργειά σας δεν ολοκληρώθηκε.",
      invalid_form: "Η φόρμα δεν είναι έγκυρη. Παρακαλώ ελέγξτε για λάθη.",
      loading: "Η σελίδα φορτώνει, παρακαλώ περιμένετε.",
      no: "Όχι",
      not_found: "Δεν βρέθηκαν αποτελέσματα",
      yes: "Ναι",
      unsaved_changes:
        "Μερικές από τις αλλαγές σας δεν σώθηκαν. Θέλετε να τις αγνοήσετε;",
    },
    navigation: {
      no_results: "Δεν βρέθηκαν αποτελέσματα",
      no_more_results:
        "Ο αριθμός σελίδας %{page} είναι εκτός ορίων. Δοκιμάστε την προηγούμενη σελίδα.",
      page_out_of_boundaries: "Η σελίδα με αριθμό %{page} είναι εκτός ορίων",
      page_out_from_end:
        "Δεν είναι δυνατή η περιήγηση μετά την τελευταία σελίδα",
      page_out_from_begin: "Δεν είναι δυνατή η περιήγηση πριν την 1η σελίδα",
      page_range_info: "%{offsetBegin}-%{offsetEnd} από %{total}",
      page_rows_per_page: "Καταχωρήσεις ανά σελίδα: ",
      next: "Επόμενη",
      prev: "Προηγούμενη",
      skip_nav: "Παράκαμψη",
    },
    notification: {
      bad_item: "Εσφαλμένη εγγραφή",
      canceled: "Η ενέργεια ακυρώθηκε",
      created: "Η εγγραφή δημιουργήθηκε",
      data_provider_error:
        "dataProvider λάθος. Ελέγξτε την κονσόλα για λεπτομέρειες.",
      deleted: "Η εγγραφή διαγράφηκε |||| %{smart_count} εγγραφές διαγράφηκαν",
      http_error: "Σφάλμα επικοινωνίας με τον διακομιστή",
      i18n_error: "Δεν βρέθηκαν οι μεταφράσεις για την συγκεκριμένη γλώσσα",
      item_doesnt_exist: "Η εγγραφή δεν υπάρχει",
      logged_out: "Αποσυνδεθήκατε",
      not_authorized: "Δεν έχετε εξουσιοδότηση πρόσβασης σε αυτή την σελίδα.",
      updated: "Εγγραφή ανανεώθηκε |||| %{smart_count} εγγραφές ανανεώθηκαν",
    },
    page: {
      create: "Δημιουργία %{name}",
      dashboard: "Αρχική",
      edit: "%{name} #%{id}",
      empty: "Δεν υπάρχει %{name} ακόμα",
      error: "Κάτι πήγε λάθος",
      invite: "Θέλετε να προσθέτε ένα;",
      list: "Λίστα των %{name}",
      loading: "Φόρτωση",
      not_found: "'Η σελίδα δεν υπάρχει",
      show: "%{name} #%{id}",
    },
    sort: {
      ASC: "Αύξουσα σειρά",
      DESC: "Φθίνουσα σειρά",
      sort_by: "Ταξινόμηση κατά %{field} %{order}",
    },
    validation: {
      email: "Πρέπει να είναι έγκυρο email",
      maxLength: "Χρειάζονται το πολύ %{max} χαρακτήρες",
      maxValue: "Χρειάζεται το πολύ %{max}",
      minLength: "Χρειάζονται το λιγότερο %{max} χαρακτήρες",
      minValue: "Χρειάζονται τουλάχιστον %{min}",
      number: "Πρέπει να είναι αριθμός",
      oneOf: "Πρέπει να είναι ένα από: %{options}",
      regex: "Πρέπει να ακολουθεί συγκεκριμένο φορμάτ (regexp): %{pattern}",
      required: "Υποχρεωτικό",
    },
  },
};

export default elMessages;
