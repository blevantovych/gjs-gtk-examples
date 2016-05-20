#!/usr/bin/env gjs

const Gtk = imports.gi.Gtk;

Gtk.init(null);

function on_entry_activated()
{
    print("Entry text: " + entry.get_text());
}

var window = new Gtk.Window();
window.set_title("Entry");
window.connect("destroy", Gtk.main_quit);

var entry = new Gtk.Entry();
entry.connect("activate", on_entry_activated);
window.add(entry);

window.show_all();

Gtk.main();
