#!/usr/bin/env gjs

const Gtk = imports.gi.Gtk;

Gtk.init(null);

function on_combobox_changed(combobox)
{
    print(combobox.get_active_text());
}

var window = new Gtk.Window({type: Gtk.WindowType.TOPLEVEL});
window.set_title("ComboBoxText");
window.connect("destroy", Gtk.main_quit);

var combobox = new Gtk.ComboBoxText();
combobox.append_text("Aintree");
combobox.append_text("Epsom Downs");
combobox.append_text("Kempton");
combobox.append_text("York");
combobox.append_text("Ripon");
combobox.set_active(0);
combobox.connect("changed", function() {on_combobox_changed(combobox)});
window.add(combobox);

window.show_all();

Gtk.main();
