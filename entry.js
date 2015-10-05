#!/usr/bin/env gjs

const Gtk = imports.gi.Gtk;

Gtk.init(null);

function on_entry_activated()
{
    print("Entry text: '" + entry.get_text() + "'");
}

let window = new Gtk.Window({type: Gtk.WindowType.TOPLEVEL});
window.set_title("Entry");
window.connect("destroy", Gtk.main_quit);

let entry = new Gtk.Entry();
entry.connect("activate", function() {on_entry_activated()});
window.add(entry);

window.show_all();

Gtk.main();
