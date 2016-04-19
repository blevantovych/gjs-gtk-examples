#!/usr/bin/env gjs

const Gtk = imports.gi.Gtk;

Gtk.init(null);

function on_search_bar_toggled()
{
    searchbar.set_search_mode(checkbutton.get_active());
}

var window = new Gtk.Window();
window.set_title("SearchBar");
window.connect("destroy", Gtk.main_quit);

var box = new Gtk.Box({orientation: Gtk.Orientation.VERTICAL});
window.add(box);

var checkbutton = new Gtk.CheckButton({label: "SearchBar visible"});
checkbutton.connect("toggled", function() {on_search_bar_toggled()});
box.add(checkbutton);

var searchbar = new Gtk.SearchBar();
searchbar.set_search_mode(false);
box.add(searchbar);

var searchentry = new Gtk.SearchEntry();
searchbar.add(searchentry);

window.show_all();

Gtk.main();
