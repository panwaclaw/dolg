

(function(globals) {

  var django = globals.django || (globals.django = {});

  
  django.pluralidx = function(n) {
    var v=(n % 1 == 0 && n % 10 == 1 && n % 100 != 11 ? 0 : n % 1 == 0 && n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 12 || n % 100 > 14) ? 1 : n % 1 == 0 && (n % 10 ==0 || (n % 10 >=5 && n % 10 <=9) || (n % 100 >=11 && n % 100 <=14 )) ? 2: 3);
    if (typeof(v) == 'boolean') {
      return v ? 1 : 0;
    } else {
      return v;
    }
  };
  

  /* gettext library */

  django.catalog = django.catalog || {};
  
  var newcatalog = {
    "%(sel)s of %(cnt)s selected": [
      "\u041e\u0431\u0440\u0430\u043d\u043e %(sel)s \u0437 %(cnt)s",
      "\u041e\u0431\u0440\u0430\u043d\u043e %(sel)s \u0437 %(cnt)s",
      "\u041e\u0431\u0440\u0430\u043d\u043e %(sel)s \u0437 %(cnt)s",
      "\u041e\u0431\u0440\u0430\u043d\u043e %(sel)s \u0437 %(cnt)s"
    ],
    "6 a.m.": "6",
    "6 p.m.": "18:00",
    "April": "\u043a\u0432\u0456\u0442\u043d\u044f",
    "August": "\u0441\u0435\u0440\u043f\u043d\u044f",
    "Available %s": "\u0412 \u043d\u0430\u044f\u0432\u043d\u043e\u0441\u0442\u0456 %s",
    "Cancel": "\u0412\u0456\u0434\u043c\u0456\u043d\u0438\u0442\u0438",
    "Choose": "\u041e\u0431\u0440\u0430\u0442\u0438",
    "Choose a Date": "\u041e\u0431\u0435\u0440\u0456\u0442\u044c \u0434\u0430\u0442\u0443",
    "Choose a Time": "\u041e\u0431\u0435\u0440\u0456\u0442\u044c \u0447\u0430\u0441",
    "Choose a time": "\u041e\u0431\u0435\u0440\u0456\u0442\u044c \u0447\u0430\u0441",
    "Choose all": "\u041e\u0431\u0440\u0430\u0442\u0438 \u0432\u0441\u0456",
    "Chosen %s": "\u041e\u0431\u0440\u0430\u043d\u043e %s",
    "Click to choose all %s at once.": "\u041d\u0430\u0442\u0438\u0441\u043d\u0456\u0442\u044c \u0449\u043e\u0431 \u043e\u0431\u0440\u0430\u0442\u0438 \u0432\u0441\u0456 %s \u0432\u0456\u0434\u0440\u0430\u0437\u0443.",
    "Click to remove all chosen %s at once.": "\u041d\u0430\u0442\u0438\u0441\u043d\u0456\u0442\u044c \u0449\u043e\u0431 \u0432\u0438\u0434\u0430\u043b\u0438\u0442\u0438 \u0432\u0441\u0456 \u043e\u0431\u0440\u0430\u043d\u0456 %s \u0432\u0456\u0434\u0440\u0430\u0437\u0443.",
    "December": "\u0433\u0440\u0443\u0434\u043d\u044f",
    "February": "\u043b\u044e\u0442\u043e\u0433\u043e",
    "Filter": "\u0424\u0456\u043b\u044c\u0442\u0440",
    "Hide": "\u0421\u0445\u043e\u0432\u0430\u0442\u0438",
    "January": "\u0441\u0456\u0447\u043d\u044f",
    "July": "\u043b\u0438\u043f\u043d\u044f",
    "June": "\u0447\u0435\u0440\u0432\u043d\u044f",
    "March": "\u0431\u0435\u0440\u0435\u0437\u043d\u044f",
    "May": "\u0442\u0440\u0430\u0432\u043d\u044f",
    "Midnight": "\u041f\u0456\u0432\u043d\u0456\u0447",
    "Noon": "\u041f\u043e\u043b\u0443\u0434\u0435\u043d\u044c",
    "Note: You are %s hour ahead of server time.": [
      "\u041f\u0440\u0438\u043c\u0456\u0442\u043a\u0430: \u0412\u0438 \u043d\u0430 %s \u0433\u043e\u0434\u0438\u043d\u0443 \u043f\u043e\u043f\u0435\u0440\u0435\u0434\u0443 \u0441\u0435\u0440\u0432\u0435\u0440\u043d\u043e\u0433\u043e \u0447\u0430\u0441\u0443.",
      "\u041f\u0440\u0438\u043c\u0456\u0442\u043a\u0430: \u0412\u0438 \u043d\u0430 %s \u0433\u043e\u0434\u0438\u043d\u0438 \u043f\u043e\u043f\u0435\u0440\u0435\u0434\u0443 \u0441\u0435\u0440\u0432\u0435\u0440\u043d\u043e\u0433\u043e \u0447\u0430\u0441\u0443.",
      "\u041f\u0440\u0438\u043c\u0456\u0442\u043a\u0430: \u0412\u0438 \u043d\u0430 %s \u0433\u043e\u0434\u0438\u043d \u043f\u043e\u043f\u0435\u0440\u0435\u0434\u0443 \u0441\u0435\u0440\u0432\u0435\u0440\u043d\u043e\u0433\u043e \u0447\u0430\u0441\u0443.",
      "\u041f\u0440\u0438\u043c\u0456\u0442\u043a\u0430: \u0412\u0438 \u043d\u0430 %s \u0433\u043e\u0434\u0438\u043d \u043f\u043e\u043f\u0435\u0440\u0435\u0434\u0443 \u0441\u0435\u0440\u0432\u0435\u0440\u043d\u043e\u0433\u043e \u0447\u0430\u0441\u0443."
    ],
    "Note: You are %s hour behind server time.": [
      "\u041f\u0440\u0438\u043c\u0456\u0442\u043a\u0430: \u0412\u0438 \u043d\u0430 %s \u0433\u043e\u0434\u0438\u043d\u0443 \u043f\u043e\u0437\u0430\u0434\u0443 \u0441\u0435\u0440\u0432\u0435\u0440\u043d\u043e\u0433\u043e \u0447\u0430\u0441\u0443.",
      "\u041f\u0440\u0438\u043c\u0456\u0442\u043a\u0430: \u0412\u0438 \u043d\u0430 %s \u0433\u043e\u0434\u0438\u043d\u0438 \u043f\u043e\u0437\u0430\u0434\u0443 \u0441\u0435\u0440\u0432\u0435\u0440\u043d\u043e\u0433\u043e \u0447\u0430\u0441\u0443.",
      "\u041f\u0440\u0438\u043c\u0456\u0442\u043a\u0430: \u0412\u0438 \u043d\u0430 %s \u0433\u043e\u0434\u0438\u043d \u043f\u043e\u0437\u0430\u0434\u0443 \u0441\u0435\u0440\u0432\u0435\u0440\u043d\u043e\u0433\u043e \u0447\u0430\u0441\u0443.",
      "\u041f\u0440\u0438\u043c\u0456\u0442\u043a\u0430: \u0412\u0438 \u043d\u0430 %s \u0433\u043e\u0434\u0438\u043d \u043f\u043e\u0437\u0430\u0434\u0443 \u0441\u0435\u0440\u0432\u0435\u0440\u043d\u043e\u0433\u043e \u0447\u0430\u0441\u0443."
    ],
    "November": "\u043b\u0438\u0441\u0442\u043e\u043f\u0430\u0434\u0430",
    "Now": "\u0417\u0430\u0440\u0430\u0437",
    "October": "\u0436\u043e\u0432\u0442\u043d\u044f",
    "Remove": "\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438",
    "Remove all": "\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438 \u0432\u0441\u0435",
    "September": "\u0432\u0435\u0440\u0435\u0441\u043d\u044f",
    "Show": "\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u0438",
    "This is the list of available %s. You may choose some by selecting them in the box below and then clicking the \"Choose\" arrow between the two boxes.": "\u0426\u0435 \u0441\u043f\u0438\u0441\u043e\u043a \u0432\u0441\u0456\u0445 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0438\u0445 %s. \u0412\u0438 \u043c\u043e\u0436\u0435\u0442\u0435 \u043e\u0431\u0440\u0430\u0442\u0438 \u0434\u0435\u044f\u043a\u0456 \u0437 \u043d\u0438\u0445, \u0432\u0438\u0434\u0456\u043b\u0438\u0432\u0448\u0438 \u0457\u0445 \u0443 \u043f\u043e\u043b\u0456 \u043d\u0438\u0436\u0447\u0435 \u0456 \u043d\u0430\u0442\u0438\u0441\u043d\u0443\u0432\u0448\u0442 \u043a\u043d\u043e\u043f\u043a\u0443 \"\u041e\u0431\u0440\u0430\u0442\u0438\".",
    "This is the list of chosen %s. You may remove some by selecting them in the box below and then clicking the \"Remove\" arrow between the two boxes.": "\u0426\u0435 \u0441\u043f\u0438\u0441\u043e\u043a \u043e\u0431\u0440\u0430\u043d\u0438\u0445 %s. \u0412\u0438 \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u0438\u0434\u0430\u043b\u0438\u0442\u0438 \u0434\u0435\u044f\u043a\u0456 \u0437 \u043d\u0438\u0445, \u0432\u0438\u0434\u0456\u043b\u0438\u0432\u0448\u0438 \u0457\u0445 \u0443 \u043f\u043e\u043b\u0456 \u043d\u0438\u0436\u0447\u0435 \u0456 \u043d\u0430\u0442\u0438\u0441\u043d\u0443\u0432\u0448\u0438 \u043a\u043d\u043e\u043f\u043a\u0443 \"\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438\".",
    "Today": "\u0421\u044c\u043e\u0433\u043e\u0434\u043d\u0456",
    "Tomorrow": "\u0417\u0430\u0432\u0442\u0440\u0430",
    "Type into this box to filter down the list of available %s.": "\u041f\u043e\u0447\u043d\u0456\u0442\u044c \u0432\u0432\u043e\u0434\u0438\u0442\u0438 \u0442\u0435\u043a\u0441\u0442 \u0432 \u0446\u044c\u043e\u043c\u0443 \u043f\u043e\u043b\u0456 \u0449\u043e\u0431 \u0432\u0456\u0434\u0444\u0456\u043b\u044c\u0442\u0440\u0443\u0432\u0430\u0442\u0438 \u0441\u043f\u0438\u0441\u043e\u043a \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0438\u0445 %s.",
    "Yesterday": "\u0412\u0447\u043e\u0440\u0430",
    "You have selected an action, and you haven't made any changes on individual fields. You're probably looking for the Go button rather than the Save button.": "\u0412\u0438 \u043e\u0431\u0440\u0430\u043b\u0438 \u0434\u0456\u044e \u0456 \u043d\u0435 \u0437\u0440\u043e\u0431\u0438\u043b\u0438 \u0436\u043e\u0434\u043d\u0438\u0445 \u0437\u043c\u0456\u043d \u0443 \u043f\u043e\u043b\u044f\u0445. \u0412\u0438, \u043d\u0430\u043f\u0435\u0432\u043d\u043e, \u0448\u0443\u043a\u0430\u0454\u0442\u0435 \u043a\u043d\u043e\u043f\u043a\u0443 \"\u0412\u0438\u043a\u043e\u043d\u0430\u0442\u0438\", \u0430 \u043d\u0435 \"\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438\".",
    "You have selected an action, but you haven't saved your changes to individual fields yet. Please click OK to save. You'll need to re-run the action.": "\u0412\u0438 \u043e\u0431\u0440\u0430\u043b\u0438 \u0434\u0456\u044e, \u0430\u043b\u0435 \u043d\u0435 \u0437\u0431\u0435\u0440\u0435\u0433\u043b\u0438 \u0437\u043c\u0456\u043d\u0438 \u0432 \u043e\u043a\u0440\u0435\u043c\u0438\u0445 \u043f\u043e\u043b\u044f\u0445. \u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430, \u043d\u0430\u0442\u0438\u0441\u043d\u0456\u0442\u044c \u041e\u041a, \u0449\u043e\u0431 \u0437\u0431\u0435\u0440\u0435\u0433\u0442\u0438. \u0412\u0430\u043c \u0434\u043e\u0432\u0435\u0434\u0435\u0442\u044c\u0441\u044f \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u043e \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u0438 \u0434\u0456\u044e.",
    "You have unsaved changes on individual editable fields. If you run an action, your unsaved changes will be lost.": "\u0412\u0438 \u0437\u0440\u043e\u0431\u0438\u043b\u0438 \u044f\u043a\u0456\u0441\u044c \u0437\u043c\u0456\u043d\u0438 \u0443 \u0434\u0435\u044f\u043a\u0438\u0445 \u043f\u043e\u043b\u044f\u0445. \u042f\u043a\u0449\u043e \u0412\u0438 \u0432\u0438\u043a\u043e\u043d\u0430\u0454\u0442\u0435 \u0446\u044e \u0434\u0456\u044e, \u0432\u0441\u0456 \u043d\u0435\u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043d\u0456 \u0437\u043c\u0456\u043d\u0438 \u0431\u0443\u0434\u0435 \u0432\u0442\u0440\u0430\u0447\u0435\u043d\u043e.",
    "one letter Friday\u0004F": "\u041f",
    "one letter Monday\u0004M": "\u041f",
    "one letter Saturday\u0004S": "\u0421",
    "one letter Sunday\u0004S": "\u041d",
    "one letter Thursday\u0004T": "\u0427",
    "one letter Tuesday\u0004T": "\u0412",
    "one letter Wednesday\u0004W": "\u0421"
  };
  for (var key in newcatalog) {
    django.catalog[key] = newcatalog[key];
  }
  

  if (!django.jsi18n_initialized) {
    django.gettext = function(msgid) {
      var value = django.catalog[msgid];
      if (typeof(value) == 'undefined') {
        return msgid;
      } else {
        return (typeof(value) == 'string') ? value : value[0];
      }
    };

    django.ngettext = function(singular, plural, count) {
      var value = django.catalog[singular];
      if (typeof(value) == 'undefined') {
        return (count == 1) ? singular : plural;
      } else {
        return value.constructor === Array ? value[django.pluralidx(count)] : value;
      }
    };

    django.gettext_noop = function(msgid) { return msgid; };

    django.pgettext = function(context, msgid) {
      var value = django.gettext(context + '\x04' + msgid);
      if (value.indexOf('\x04') != -1) {
        value = msgid;
      }
      return value;
    };

    django.npgettext = function(context, singular, plural, count) {
      var value = django.ngettext(context + '\x04' + singular, context + '\x04' + plural, count);
      if (value.indexOf('\x04') != -1) {
        value = django.ngettext(singular, plural, count);
      }
      return value;
    };

    django.interpolate = function(fmt, obj, named) {
      if (named) {
        return fmt.replace(/%\(\w+\)s/g, function(match){return String(obj[match.slice(2,-2)])});
      } else {
        return fmt.replace(/%s/g, function(match){return String(obj.shift())});
      }
    };


    /* formatting library */

    django.formats = {
    "DATETIME_FORMAT": "d E Y \u0440. H:i",
    "DATETIME_INPUT_FORMATS": [
      "%d.%m.%Y %H:%M:%S",
      "%d.%m.%Y %H:%M:%S.%f",
      "%d.%m.%Y %H:%M",
      "%d.%m.%Y",
      "%d %B %Y %H:%M:%S",
      "%d %B %Y %H:%M:%S.%f",
      "%d %B %Y %H:%M",
      "%d %B %Y",
      "%Y-%m-%d %H:%M:%S",
      "%Y-%m-%d %H:%M:%S.%f",
      "%Y-%m-%d %H:%M",
      "%Y-%m-%d"
    ],
    "DATE_FORMAT": "d E Y \u0440.",
    "DATE_INPUT_FORMATS": [
      "%d.%m.%Y",
      "%d %B %Y",
      "%Y-%m-%d"
    ],
    "DECIMAL_SEPARATOR": ",",
    "FIRST_DAY_OF_WEEK": 1,
    "MONTH_DAY_FORMAT": "d F",
    "NUMBER_GROUPING": 3,
    "SHORT_DATETIME_FORMAT": "d.m.Y H:i",
    "SHORT_DATE_FORMAT": "d.m.Y",
    "THOUSAND_SEPARATOR": "\u00a0",
    "TIME_FORMAT": "H:i",
    "TIME_INPUT_FORMATS": [
      "%H:%M:%S",
      "%H:%M:%S.%f",
      "%H:%M"
    ],
    "YEAR_MONTH_FORMAT": "F Y"
  };

    django.get_format = function(format_type) {
      var value = django.formats[format_type];
      if (typeof(value) == 'undefined') {
        return format_type;
      } else {
        return value;
      }
    };

    /* add to global namespace */
    globals.pluralidx = django.pluralidx;
    globals.gettext = django.gettext;
    globals.ngettext = django.ngettext;
    globals.gettext_noop = django.gettext_noop;
    globals.pgettext = django.pgettext;
    globals.npgettext = django.npgettext;
    globals.interpolate = django.interpolate;
    globals.get_format = django.get_format;

    django.jsi18n_initialized = true;
  }

}(this));

