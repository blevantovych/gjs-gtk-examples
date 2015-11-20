#!/usr/bin/env gjs

const Gtk = imports.gi.Gtk;

Gtk.init(null);

let window = new Gtk.Window({type: Gtk.WindowType.TOPLEVEL});
window.set_default_size(-1, 200);
window.connect("destroy", Gtk.main_quit);

let headerbar = new Gtk.HeaderBar();
headerbar.set_title("HeaderBar");
headerbar.set_subtitle("With Subtitle");
headerbar.set_show_close_button(true);
headerbar.set_vexpand(false);
window.set_titlebar(headerbar);

window.show_all();

Gtk.main();
