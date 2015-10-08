#!/usr/bin/env gjs

const Gtk = imports.gi.Gtk;

Gtk.init(null);

let window = new Gtk.Window({type: Gtk.WindowType.TOPLEVEL});
window.set_title("LinkButton");
window.set_default_size(200, 200);
window.connect("destroy", Gtk.main_quit);

let linkbutton = new Gtk.LinkButton({label: "Programmica"});
linkbutton.set_uri("http://programmica.com/");
window.add(linkbutton);

window.show_all();

Gtk.main();
