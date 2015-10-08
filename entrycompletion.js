#!/usr/bin/env gjs

const Gtk = imports.gi.Gtk;
const GObject = imports.gi.GObject;

Gtk.init(null);

function on_radio_button_toggled(radiobutton)
{
    if (radiobutton.get_active())
        if (radiobutton.mode == 0)
        {
            entrycompletion.set_popup_completion(true);
            entrycompletion.set_inline_completion(false);
        }
        else
        {
            entrycompletion.set_popup_completion(false);
            entrycompletion.set_inline_completion(true);
        }
}

let window = new Gtk.Window({type: Gtk.WindowType.TOPLEVEL});
window.set_title("EntryCompletion");
window.connect("destroy", Gtk.main_quit);

let grid = new Gtk.Grid();
window.add(grid);

let liststore = new Gtk.ListStore();
liststore.set_column_types([GObject.TYPE_STRING]);
liststore.set(liststore.append(), [0], ["Daniel"]);
liststore.set(liststore.append(), [0], ["Martin"]);
liststore.set(liststore.append(), [0], ["Christopher"]);
liststore.set(liststore.append(), [0], ["Timothy"]);
liststore.set(liststore.append(), [0], ["Sebastian"]);

let entrycompletion = new Gtk.EntryCompletion();
entrycompletion.set_model(liststore);
entrycompletion.set_text_column(0);

let entry = new Gtk.Entry();
entry.set_completion(entrycompletion);
grid.attach(entry, 0, 0, 1, 1);

let radiobuttonPopup = new Gtk.RadioButton({label: "Popup Completion"});
radiobuttonPopup.mode = 0;
radiobuttonPopup.connect("toggled", function() {on_radio_button_toggled(radiobuttonPopup)});
grid.attach(radiobuttonPopup, 0, 1, 1, 1);
let radiobuttonInline = new Gtk.RadioButton({label: "Inline Completion"});
radiobuttonInline.join_group(radiobuttonPopup);
radiobuttonInline.mode = 1;
radiobuttonInline.connect("toggled", function() {on_radio_button_toggled(radiobuttonInline)});
grid.attach(radiobuttonInline, 0, 2, 1, 1);

window.show_all();

Gtk.main();
