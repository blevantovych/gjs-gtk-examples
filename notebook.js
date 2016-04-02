#!/usr/bin/env gjs

const Gtk = imports.gi.Gtk;

Gtk.init(null);

var window = new Gtk.Window({type: Gtk.WindowType.TOPLEVEL});
window.set_title("Notebook");
window.set_default_size(200, 200);
window.connect("destroy", Gtk.main_quit);

var notebook = new Gtk.Notebook();
window.add(notebook);

var label1child = new Gtk.Label({label: "Page 1 Child Widget"});
var label1title = new Gtk.Label({label: "Page 1"});
notebook.append_page(label1child, label1title);

var label2child = new Gtk.Label({label: "Page 2 Child Widget"});
var label2title = new Gtk.Label({label: "Page 2"});
notebook.append_page(label2child, label2title);

var label3child = new Gtk.Label({label: "Page 3 Child Widget"});
var label3title = new Gtk.Label({label: "Page 3"});
notebook.append_page(label3child, label3title);

window.show_all();

Gtk.main();
