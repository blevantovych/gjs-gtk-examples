#!/usr/bin/gjs

const Gtk = imports.gi.Gtk;

Gtk.init(null);

function on_search_entry_activated(searchentry)
{
    print("SearchEntry text: '" + searchentry.get_text() + "'");
}

let window = new Gtk.Window({type: Gtk.WindowType.TOPLEVEL});
window.set_title("SearchEntry");
window.connect("destroy", Gtk.main_quit);

let searchentry = new Gtk.SearchEntry();
searchentry.connect("activate", function() {on_search_entry_activated(searchentry)});
window.add(searchentry);

window.show_all();

Gtk.main();
